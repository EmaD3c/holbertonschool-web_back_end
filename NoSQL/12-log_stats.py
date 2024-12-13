#!/usr/bin/env python3
"""
Log stats
"""

from pymongo import MongoClient

def log_stats():
    """
    affiche les statistiques de base sur les logs nginx
    """
    # connexion a mongodb
    client = MongoClient()  # Connexion par défaut à mongodb://127.0.0.1:27017
    db = client.logs
    nginx_collection = db.nginx

    # log count
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # methode http
    print("Methods:")
    print(f"\tmethod GET: {nginx_collection.count_documents({'method': 'GET'})}")
    print(f"\tmethod POST: {nginx_collection.count_documents({'method': 'POST'})}")
    print(f"\tmethod PUT: {nginx_collection.count_documents({'method': 'PUT'})}")
    print(f"\tmethod PATCH: {nginx_collection.count_documents({'method': 'PATCH'})}")
    print(f"\tmethod DELETE: {nginx_collection.count_documents({'method': 'DELETE'})}")

    # log avec get et status
    status_check = nginx_collection.count_documents({'method': 'GET', 'path': '/status'})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()
