
# Webhook-Tester

Javascript based solution for testing webhook services based on https://github.com/webhooksite/webhook.site webhook services

In order to get the setup running, download Docker:
https://www.docker.com/products/docker-desktop/

Run following commands:

```bash
  docker pull ghcr.io/tarampampam/webhook-tester:issue-308
```

```bash
  docker run --rm -p 8080:8080/tcp tarampampam/webhook-tester serve
```

Visit http://127.0.0.1:8080/ and you should see the webhook tester service running.

## Dependencies

```bash
    Axios.js
    Jest.js
    Faker.js
    Uuid.js
    Ajv.js
```

## Setup


```bash
  npm installl
```

## To run tests


```bash
  npm test "async.test.js"
```

```bash
  npm test "main.test.js"
```

```bash
  npm test "multipleEvents.test.js"
```

## Authors

- [@arminzukic](https://www.github.com/arminzukic)