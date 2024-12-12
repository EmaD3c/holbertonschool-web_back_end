#!/usr/bin/env python3
"""
Simple helper function
"""
import csv
import math
from typing import List, Dict, Tuple


def index_range(page: int, page_size: int) -> tuple:
    """
    return a tuple of size two containing a start index and an end index
    corresponding to the range of indexes
    to return in a list for those particular pagination parameters.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        return List[List]: list of rows from the dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        # return sliced dataset
        dataset = self.dataset()
        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Return a dictionary with hypermedia pagination detail
        """
        data = self.get_page(page, page_size)
        total_data = len(self.dataset())
        total_pages = math.ceil(total_data / page_size)

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages,
        }

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Gère les cas où des lignes ont été supprimées du dataset
        Saute les index qui n'existent plus
        Continue jusqu'à trouver le nombre demandé d'éléments
        Retourne l'index de départ, les données,
        la taille réelle de la page, et le prochain index
        """
        # valider l'index
        indexed_dataset = self.indexed_dataset()
        assert index is None or (0 <= index < len(
            indexed_dataset)), "index out of range"

        # index to 0
        if index is None:
            index = 0

        # trouve les prochains items valide
        data = []
        next_index = index

        # recupere les items pour la page
        while len(data) < page_size and next_index < len(indexed_dataset):
            if next_index in indexed_dataset:
                data.append(indexed_dataset[next_index])
            next_index += 1

        # return the hypermedia pagination detail
        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
