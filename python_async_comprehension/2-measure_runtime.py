#!/usr/bin/env python3
"""
async
"""
import time
import asyncio
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    xcute async comprehension 4fois
    et use asyncio gater en parallel
    mesure du temps total a la fin
    """
    first = time.time()
    await asyncio.gather(*(async_comprehension() for x in range(4)))
    last = time.time()
    return last - first
