const fs = require('fs');

class Exchange {

  constructor(id, fileName, quantity, price) {
    // TODO
    this.id = id;
    this.fileName = fileName;
    this.quantity = quantity;
    this.price = price;
  }

  sync(fileName) {
    // TODO
    process.on('SIGINT', (err)=> {
      if(err){
        return console.log(err)
      } else {
      fs.writeFile(fileName, JSON.stringify(data));
      process.exit();
      }
    });
  }

  buy(quantity, price) {
    // TODO
      var data = {}
      data.table = []
      for (i=0; i <100 ; i++){
        var obj = {
            id: i+1,
            isBuyOrder: true,
            quantity: quantity,
            price: price,
            executedQuality: quantity
        }
        data.table.push(obj)
      }
      fs.writeFile ("lib/orderbook.json", JSON.stringify(data), (err) => {
          if (err) throw err;
          console.log('complete');
          }
      );

      return data

  }

  sell(quantity, price) {
    // TODO
    var data = {}
      data.table = []
      for (i=0; i <100 ; i++){
        var obj = {
            id: i,
            isBuyOrder: false,
            quantity: quantity,
            price: price,
            executedQuality: quantity
        }
        data.table.push(obj)
      }
      fs.writeFile ("lib/orderbook.json", JSON.stringify(data), (err) => {
          if (err) throw err;
          console.log('complete');
          }
      );

      return data
    
  }

  getQuantityAtPrice(price) {
    // TODO
    var data = {}
      data.table = []
      for (i=0; i <100 ; i++){
        var obj = {
            quantity: quantity,
        }
        data.table.push(obj)
      }
      fs.writeFile ("lib/orderbook.json", JSON.stringify(data), (err) => {
          if (err) throw err;
          console.log('complete');
          }
      );

      return data
    
  }

  getOrder(id) {
    // TODO
    var data = {}
      data.table = []
      for (i=0; i <100 ; i++){
        var obj = {
            id: id,
            isBuyOrder: false,
            quantity: quantity,
            price: price,
            executedQuality: quantity
        }
        data.table.push(obj)
      }
      fs.writeFile ("lib/orderbook.json", JSON.stringify(data), (err) => {
          if (err) throw err;
          console.log('complete');
          }
      );

      return data

  }
}

module.exports = Exchange;
