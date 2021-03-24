class Tank {
    constructor(ammunition) {
        this.ammunition = ammunition;
    }
    moveTo(x, y) {

    }
    fireTo(x,y) {
        //перед выстрелом проверяем снаряды
        if (this.canFire()) {
      this.ammunition -=1;
    }
    }

    //вспомогательный метод для проверки снарядов:
    canFire(ammunition) {
        if (ammunition>0) {
            return true;
        } else {
            return false;
        }
    }

    moveAndFire(moveX, moveY, fireX, FireY) {
        this.moveTo(moveX, moveY);
        this.fireTo(fireX, fireY);
    }
}

//var tank1 = new Tank;
//tank.moveTo(10, 20);
//var tank2 = new Tank;
//tank.fireTo(10, 10);

var tank = new Tank(10);
alert(tank.ammunition);
