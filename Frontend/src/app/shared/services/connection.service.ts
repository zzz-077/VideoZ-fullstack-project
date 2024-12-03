import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  BackUrl: string = 'http://localhost:3000';
  socket: Socket;
  constructor(private http: HttpClient) {
    this.socket = io(this.BackUrl, {
      withCredentials: true,
      transports: ['websocket', 'polling'],
      autoConnect: false,
      reconnection: false,
    });
    /*
    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket.id);
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });*/
  }
  /*  JoinedInCall(): void {
    this.socket.emit('JoinedInCall');
  }*/
}
