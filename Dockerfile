FROM node:lts

# WORKDIR /code

# Install basic development tools
# RUN apt update && apt install -y less man-db sudo
RUN apt update && apt install -y sudo
