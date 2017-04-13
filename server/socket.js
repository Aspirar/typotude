let users = {
	user1: {
		time: 305
	},
	user2: {
		time: 205
	},
	user3: {
		time: 15
	}
};

module.exports = function(io) {
	io.on('connection', function(socket) {
		console.log('A client connected');
		socket.emit('connected');

		socket.on('hello', function(msg) {
			let name = msg.name;
			console.log(name);
			if (!users[name]) socket.emit('reject');
			else {
				socket.emit('time', { seconds: users[name].time - 5 });
				let timer = setInterval(function () {
					if (users[name].time) {
						users[name].time -= 1;
					}
					if (users[name].time === 5) socket.emit('get data');
					if (users[name].time <= 0) clearInterval(timer);
				}, 1000);
			}
		});

		socket.on('data', function(msg) {
			let name = msg.name;
			if (!users[name]) socket.emit('reject');
			else {
				if (users[name].time <= 0) socket.emit('reject');
				else users[name].data = msg.data;
				console.log(users[name].data);
				socket.emit('done');
			}
		});

		socket.on('admin', function() {
			socket.emit('admin', users);
		});
	});
};
