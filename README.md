# swagger-ui-custom-config
It uses the swagger ui 3.8 dist files to runs documentation of a flask app independently. 


1. Added a custom config js file
```
custom-config path: swagger-config.js
```

2. Attached js src to index.js
```
<script src='./swagger-config.js' type="text/javascript"></script>
```

3. Make sure your webservice is supporting CORS.

Example for python-flask:
```
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.run(host="0.0.0.0",port=5000, debug=False)
```
