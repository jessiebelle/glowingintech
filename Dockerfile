FROM python:3.6
LABEL maintainer="glowingintech@gmail.com"

ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV dev

COPY ./requirements.txt /code/requirements.txt
RUN pip install -r /code/requirements.txt
RUN pip install gunicorn

COPY . /code/
WORKDIR /code/

RUN python manage.py migrate

RUN useradd wagtail
RUN chown -R wagtail /code
USER wagtail

EXPOSE 8000
CMD exec gunicorn mazurbeam.wsgi:application --bind 0.0.0.0:8000 --workers 3
FROM node:14-buster-slim AS builder

# Set working directory for react project
WORKDIR /frontend
COPY ["package.json", "package-lock.json", "./"]
COPY ["public/", "public/"]
COPY ["src/", "src/"]
RUN npm install
RUN npm run build

FROM nginx:1.21.4-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/react-frontend/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]