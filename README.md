# My Collections

This project

Ways to run project

# Using Docker
[Install Docker](https://docs.docker.com/get-docker)

Then
`docker-compose build`

Now create a `.env` and set `YELP_API_KEY` or run

`EXPORT YELP_API_KEY="<YOUR_YELP_API_KEY>"`

To run project
`docker-compose up`
## That's it!

# To run project manually
### `npm install`
### `npm start`

Within the same project directory run a second command prompt window and run

```
python3 -m venv env
. env/bin/activate
python3 pip install -r requirements.txt
EXPORT YELP_API_KEY="<YOUR_YELP_API_KEY>"
```

Now to start the proxy sever(used for querying yelp's API)
### `python proxy.py`

# Now visit your local instance running on http://localhost:3000
