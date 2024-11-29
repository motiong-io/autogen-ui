FROM python:3.12
WORKDIR /app
COPY . .

RUN pip install -e . && pip install websockets
ENV OPENAI_API_KEY="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"

ENTRYPOINT ["autogenui"]