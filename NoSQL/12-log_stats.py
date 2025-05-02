#!/usr/bin/env python3
"""
nosql
"""


def log_stat():
    """Provides stats about Nginx logs in MongoDB"""
    # connexion
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # nb de requette get vers /status
    number = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{number} status check")


if __name__ == "__main__":
    log_stat()
