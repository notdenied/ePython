from flask import request, Flask, jsonify


token = "VerySecureToken"

app = Flask(__name__)


def eval_code(fklsjdhlfgsafdhgfadsf):
    try:
        exec(fklsjdhlfgsafdhgfadsf)
        r = locals()
        try:
            del r['fklsjdhlfgsafdhgfadsf']
        except:
            pass
        return 'ok', str(r)
    except Exception as err:
        return 'err', str({'err': str(err)})


@app.route("/api/exec_code", methods=["POST"])
def exec_code():
    a = request.get_json()
    print(a)
    if "token" in a and a["token"] == token:
        try:
            st, res = eval_code(a['code'])
            return jsonify({'status': st, 'data': res})
        except Exception as err:
            return jsonify({'status': 'err', 'error': str(err)})
    else:
        return "ok"


if __name__ == "__main__":
    app.run(port=666, debug=False)
