from flask import Flask, render_template, redirect, request, url_for
from random import sample

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("index.html")


@app.route('/game-board', methods=['GET'])
def init_board(num_of_fields=32, num_of_players=2):
    num_of_fields = int(request.args.get('num_of_fields'))
    rows = num_of_fields // 8
    cols = int(num_of_fields // rows)
    num_of_players = int(request.args.get('num_of_players'))
    challenge_fields = sample(range(1, num_of_fields + 1), num_of_fields // 4)
    print(num_of_fields)
    return render_template('board.html', num_of_fields=num_of_fields,
                           num_of_players=num_of_players, challenge_fields=challenge_fields,
                           cols=cols, rows=rows)


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )
