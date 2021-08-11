import { expect } from "chai"
import { Exchange } from "../lib/index"

describe('Test for Exchange Class',()=>{
    it('it checks if Exchange returns true',(done)=>{
      expect(Exchange(2, "orderbook", 5, 2)).to.equal(true)
      done();
    });

    it('it checks if Exchange returns false',(done)=>{
      expect(Exchange(3, orderbook, 6, 7)).to.equal(false);
      done();
    });

  })

  describe('Test for Exchange Class methods',()=>{
    it('it checks if Exchange Class can call sync',(done)=>{
        expect(Exchange(3, "orderbook", 6, 8).sync).to.equal(true);
        done();
    })

    it('it checks if Exchange Class can call buy',(done)=>{
        expect(Exchange(3, "orderbook", 6, 9).buy).to.equal(true);
        done();
    })

    it('it checks if Exchange Class can call sell',(done)=>{
        expect(Exchange(3, "orderbook", 6, 5).sell).to.equal(true);
        done();
    })

    it('it checks if Exchange Class can call getQuantityAtPrice',(done)=>{
        expect(Exchange(3, "orderbook", 6, 7).getQuantityAtPrice).to.equal(true);
        done();
    })

    it('it checks if Exchange Class can call getOrder',(done)=>{
        expect(Exchange(3, "orderbook", 6, 4).getOrder).to.equal(true);
        done();
    })

  })