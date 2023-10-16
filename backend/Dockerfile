# FROM ruby:2.7.2
# RUN apt-get update -qq \
#   && apt-get install -y nodejs postgresql-client
# ADD . /Rails-Docker
# WORKDIR /Rails-Docker
# RUN gem install bundler -v 2.1.4
# RUN bundle install
# EXPOSE 3000
# CMD ["bash"]

FROM ruby:2.7.2
RUN apt-get update -qq \
  && apt-get install -y nodejs postgresql-client
COPY ./Gemfile Gemfile
COPY ./Gemfile.lock Gemfile.lock
RUN gem install bundler -v 2.1.4
RUN bundle install
ADD . /Rails-Docker
WORKDIR /Rails-Docker
EXPOSE 3000
CMD ["bash"]