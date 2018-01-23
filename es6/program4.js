const yelp = {
  kick(msg) {
    this.yelp = msg;
    setImmediate(function () {
      console.log(this.yelp);
    });
  },
};

yelp.kick('ouch');
module.exports = yelp;
