from python:3.6

RUN apt update && apt upgrade && apt install -y build-essential python3-dev python3-setuptools python3-wheel

RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python get-pip.py

RUN pip install schedule
RUN pip install scrapy

RUN git clone https://github.com/icarodgl/ScrepyDesastre.git app


COPY . /app
WORKDIR /app

CMD ["python", "run.py"]