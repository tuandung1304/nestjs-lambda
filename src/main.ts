import { createApp } from './lambda/lambda-bootstrap';

async function bootstrap() {
  const app = await createApp();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Local server running on http://localhost:${port}`);
  });
}
void bootstrap();
