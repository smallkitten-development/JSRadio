# JSRadio
A tiny library for synced audio streaming.

This project can take a 12 hour audio file and play it at the same point across two browsers without being streamed from a server using Moment and Howler.

### Usage
```
var radio = new jsradio('audio/gtalossantos.mp3');
radio.start();
```
