import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 700 }
    // { duration: '1m30s', target: 10 },
    // { duration: '30s', target: 1000 },
    // { duration: '20s', target: 0 }
  ]
};

export default function() {
  http.get('http://localhost:3003/listings/1400000/reviews');
  sleep(0.05);
}
