import { Component, OnInit } from '@angular/core';
import {PlayerComponent} from './player-component';
import {iterator} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  private myGamePiece: any;
  public ctx: CanvasRenderingContext2D;
  // public c = document.getElementById('myCanvas') as HTMLCanvasElement;
  // public ct = this.c.getContext('2d');

  constructor() {
  }

  ngOnInit(): void {
    this.initialGameLoading();

  }
  getCanvasElement(): HTMLCanvasElement{
    return document.getElementById('myCanvas') as HTMLCanvasElement;
  }
  public initialGameLoading(): void{
    this.ctx = this.getCanvasElement().getContext('2d');
    document.body.insertBefore(this.getCanvasElement(), document.body.childNodes[0]);


    this.ctx.fillStyle = '#FF0000';
    this.ctx.fillRect(0, 0, 33, 33);

    // Clock
    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = '#000000';
    this.ctx.fillText('60:00', this.getWidth() * 0.5, 30);

    // Create players


    // @ts-ignore
    // const interval = setInterval(this.updateGameArea(GoalKeeper1), 20);
    // for (let i = 0; i < 100 ; i ++){
    //
    //   this.moveup(GoalKeeper1);
    // }

    const GoalKeeper1 = new PlayerComponent(1, this.getWidth() * 0.08, this.getHeight() * 0.5, 80, 80, 'assets/player.jpg');
    const Player1 = new PlayerComponent(2, this.getWidth() * 0.2, this.getHeight() * 0.25, 30, 30, 'player.jpg');
    const Player2 = new PlayerComponent(3, this.getWidth() * 0.2, this.getHeight() * 0.75, 30, 30, 'player.jpg');
    const Player3 = new PlayerComponent(4, this.getWidth() * 0.4, this.getHeight() * 0.25, 30, 30, 'player.jpg');
    const player4 = new PlayerComponent(5, this.getWidth() * 0.4, this.getHeight() * 0.75, 30, 30, 'player.jpg');
    const Goalkeeper2 = new PlayerComponent(6, this.getWidth() * 0.92, this.getHeight() * 0.5, 80, 80, 'player.jpg');
    const Player5 = new PlayerComponent(7, this.getWidth() * 0.6, this.getHeight() * 0.25, 30, 30, 'player.jpg');
    const Player6 = new PlayerComponent(8, this.getWidth() * 0.6, this.getHeight() * 0.75, 30, 30, 'player.jpg');
    const Player7 = new PlayerComponent(9, this.getWidth() * 0.8, this.getHeight() * 0.25, 30, 30, 'player.jpg');
    const Player8 = new PlayerComponent(10, this.getWidth() * 0.8, this.getHeight() * 0.75, 30, 30, 'player.jpg');
    // Create ball
    const ball = new PlayerComponent(11, this.getWidth() * 0.5, this.getHeight() * 0.5, 50, 50, 'assets/ball.jpg');
    // Draw images of players
    const img = new Image();
    img.src = GoalKeeper1.image;
    img.onload = () => {
      this.ctx.drawImage(img, GoalKeeper1.x, GoalKeeper1.y, GoalKeeper1.width, GoalKeeper1.height);
      this.ctx.drawImage(img, Player1.x, Player1.y, Player1.width, Player1.height);
      this.ctx.drawImage(img, Player2.x, Player2.y, Player2.width, Player2.height);
      this.ctx.drawImage(img, Goalkeeper2.x, Goalkeeper2.y, Goalkeeper2.width, Goalkeeper2.height);
    };
    // Draw image of ball
    const imgball = new Image();
    imgball.src = ball.image;
    imgball.onload = () => {
      this.ctx.drawImage(imgball, ball.x, ball.y, ball.width, ball.height);
    };
    // Load rectangles code, maybe delete
    this.ctx.fillRect(GoalKeeper1.x, GoalKeeper1.y, GoalKeeper1.width, GoalKeeper1.height);
    this.ctx.fillRect(Player1.x, Player1.y, Player1.width, Player1.height);
    this.ctx.fillRect(Player2.x, Player2.y, Player2.width, Player2.height);
    this.ctx.fillRect(Player3.x, Player3.y, Player3.width, Player3.height);
    this.ctx.fillRect(player4.x, player4.y, player4.width, player4.height);
    this.ctx.fillRect(Goalkeeper2.x, Goalkeeper2.y, Goalkeeper2.width, Goalkeeper2.height);
    this.ctx.fillRect(Player5.x, Player5.y, Player5.width, Player5.height);
    this.ctx.fillRect(Player6.x, Player6.y, Player6.width, Player6.height);
    this.ctx.fillRect(Player7.x, Player7.y, Player7.width, Player7.height);
    this.ctx.fillRect(Player8.x, Player8.y, Player8.width, Player8.height);
    this.ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

    // console.log(this.ct.height);
   // const interval = setInterval(this.updateGameArea, 20);

  }

  // tslint:disable-next-line:typedef
  public updateGameArea(player) {
    this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    player.x++;
    player.y++;
    const img = new Image();
    img.src = player.image;
    img.onload = () => {
      this.ctx.drawImage(img, player.x, player.y, player.width, player.height);
    };
  }

  public getHeight(): number{
    return this.getCanvasElement().height;
  }
  public getWidth(): number{
    return this.getCanvasElement().width;
  }

}
