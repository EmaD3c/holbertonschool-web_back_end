#!/usr/bin/env python3
"""
Measure the runtime
"""
import asyncio
import time
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    mesures the total execution time for wait_n(n, max_delay),
    and returns total_time / n
    """
    # mesurer le temps du debut
    s = time.perf_counter()

    # apelle la function wait_n de maniere synchrone
    asyncio.run(wait_n(n, max_delay))

    # mesure le temps a la fin
    elapsed = time.perf_counter() - s

    # calcule du temps moyen
    return elapsed / n
