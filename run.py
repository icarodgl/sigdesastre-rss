import schedule
import time
import os

# Functions setup


def call():
    os.system("scrapy crawl agu -o out/agu.json")
    os.system("scrapy crawl bloomberg -o out/bloomberg.json")


# Task scheduling
# After every 10mins geeks() is called.
# schedule.every(1).minutes.do(call)
# After every hour geeks() is called.
# schedule.every().hour.do(call)
schedule.every(1).minutes.do(call)


print("funcionando")
while True:
    schedule.run_pending()
    time.sleep(1)
