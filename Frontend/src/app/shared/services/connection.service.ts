import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, of } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  BackUrl: string = 'http://localhost:3000';
  private static socket: Socket | null = null;
  constructor(private http: HttpClient) {
    if (!ConnectionService.socket) {
      console.log('Initializing Socket.IO connection...');
      ConnectionService.socket = io(this.BackUrl, {
        withCredentials: true,
      });
      ConnectionService.socket.on('connect', () => {
        console.log(
          'Connected to Socket.IO server with ID:',
          ConnectionService.socket?.id
        );
      });

      ConnectionService.socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
      });
    } else {
      console.log('Socket.IO connection already exists.');
    }
  }
}
