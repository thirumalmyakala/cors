import http from 'k6/http';
import { check } from 'k6';

export const options = {
  duration: '2m',
  vus: 2000,  // Adjust based on desired RPS
  rps: 2000,  // Requests per second
};

export default function () {
  const res = http.get('http://a0881fe65f9934f8b9b03457deca86a2-1723200037.us-east-1.elb.amazonaws.com//proxy?url=https://www.google.de/robots.txt');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
//first install k6 using choco install k6
//install npm
//k6 run load-test.js