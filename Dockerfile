FROM python:3.12
WORKDIR /app
COPY . .

RUN pip install -e . && pip install websockets
ENV OPENAI_API_KEY="QjzR8b1Xq2c3Y4xN5z6Z7a8BcD9eF0G"
ENV OPENAI_BASE_URL="http://10.4.32.15:5000/api/openai/ve/v1"

ENTRYPOINT ["autogenui"]