from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

foot_strike = [
    {
        "pattern": [{
            "recNo": 1,
            "time": 0,
            "forefoot_strike": 834,
            "midfoot_strike": 600,
            "rarefoot_strike": 500
        }, {
            "recNo": 2,
            "time": 2,
            "forefoot_strike": 522,
            "midfoot_strike": 400,
            "rarefoot_strike": 100
        }, {
            "recNo": 3,
            "time": 2,
            "forefoot_strike": 322,
            "midfoot_strike": 200,
            "rarefoot_strike": 206
        }],
        "sensorName":
        "Smart_shoe_left",
        "date":
        "2020.03.01"
    },
    {
        "pattern": [{
            "recNo": 1,
            "time": 0,
            "forefoot_strike": 100,
            "midfoot_strike": 209,
            "rarefoot_strike": 178
        }, {
            "recNo": 2,
            "time": 2,
            "forefoot_strike": 900,
            "midfoot_strike": 234,
            "rarefoot_strike": 522
        }, {
            "recNo": 3,
            "time": 0,
            "forefoot_strike": 200,
            "midfoot_strike": 918,
            "rarefoot_strike": 320
        }],
        "sensorName":
        "Smart_shoe_left",
        "date":
        "2020.04.05"
    },
]

Arm_motion = [{
    "sensorNmae":
    "shoe_left_arm",
    "date":
    "2020.03.02",
    "pattern": [{
        "recNo": 1,
        "time": "time",
        "angle": 90
    }, {
        "recNo": 2,
        "time": "time",
        "angle": 90
    }, {
        "recNo": 3,
        "time": "time",
        "angle": 90
    }, {
        "recNo": 4,
        "time": "time",
        "angle": 90
    }, {
        "recNo": 5,
        "time": "time",
        "angle": 127
    }, {
        "recNo": 1240,
        "time": "22:42:36",
        "angle": 90
    }, {
        "recNo": 1241,
        "time": "22:42:36",
        "angle": 90
    }]
}, {
    "sensorNmae":
    "shoe_left_arm",
    "date":
    "2020.03.02",
    "pattern": [{
        "recNo": 1,
        "time": "time",
        "angle": 40
    }, {
        "recNo": 2,
        "time": "time",
        "angle": 30
    }, {
        "recNo": 3,
        "time": "time",
        "angle": 100
    }, {
        "recNo": 4,
        "time": "time",
        "angle": 90
    }, {
        "recNo": 5,
        "time": "time",
        "angle": 127
    }, {
        "recNo": 1240,
        "time": "22:42:36",
        "angle": 90
    }, {
        "recNo": 1241,
        "time": "22:42:36",
        "angle": 90
    }]
}]

track_sensor = [{
    "_id": {
        "$oid": "5f1862e6385365f593f7047f"
    },
    "sprint_id": "2020-04-30T16:00:13Z 2020-04-30T16:12:43Z ",
    "sprint_begin": "2020-04-30T16:00:13Z",
    "sprint_40": "2020-04-30T16:05:13Z",
    "sprint_90": "2020-04-30T16:09:13Z",
    "sprint_end": "2020-04-30T16:12:43Z"
}, {
    "_id": {
        "$oid": "5f1911fff41e515aa7080bf7"
    },
    "sprint_id": "2020-05-01T10:12:43Z 2020-05-01T10:22:57Z",
    "sprint_begin": "2020-05-01T10:12:43Z",
    "sprint_40": "2020-05-01T10:16:22Z",
    "sprint_90": "2020-05-01T10:20:00Z",
    "sprint_end": "2020-05-01T10:22:57Z"
}]


@app.route('/footstrike', methods=['GET'])
def books():
    if request.method == 'GET':
        if len(foot_strike) > 0:
            return jsonify(foot_strike)
        else:
            'Nothing Found', 404


@app.route('/armmotion', methods=['GET'])
def armmotion():
    if request.method == 'GET':
        if len(Arm_motion) > 0:
            return jsonify(Arm_motion)
        else:
            'Nothing Found', 404


@app.route('/legmotion', methods=['GET'])
def legmotion():
    if request.method == 'GET':
        if len(Arm_motion) > 0:
            return jsonify(Arm_motion)
        else:
            'Nothing Found', 404


@app.route('/tracksensors', methods=['GET'])
def tracksensors():
    if request.method == 'GET':
        if len(track_sensor) > 0:
            return jsonify(track_sensor)
        else:
            'Nothing Found', 404


@app.route('/')
@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/404')
def error():
    return render_template('404.html')


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/shoe')
def shoe():
    return render_template('shoe.html')


@app.route('/Leg')
def Leg():
    return render_template('Leg.html')


@app.route('/Arm')
def Arm():
    return render_template('Arm.html')


@app.route('/tracksensor')
def tracksensor():
    return render_template('tracksensor.html')


if __name__ == '__main__':
    app.run(debug=true)
