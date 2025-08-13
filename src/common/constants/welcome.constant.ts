export const WELCOME_HTML = `
<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <style>
    body {
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
      font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
    .container {
      background: #fff;
      padding: 2.5rem 2rem;
      border-radius: 1.25rem;
      box-shadow: 0 4px 24px rgba(0,0,0,0.07);
      text-align: center;
    }
    h1 {
      color: #4f46e5;
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
      font-weight: 700;
    }
    p {
      color: #64748b;
      font-size: 1.15rem;
      margin-top: 0;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      .container {
        margin: 0 2rem;
      }
    }
  </style>
  </head>
  <body>
    <div class="container">
      <h1>👋 Welcome!</h1>
      <p>NestJS serverless app is running beautifully on AWS Lambda.<br>Enjoy building something amazing.</p>
    </div>
  </body>
</html>
`;
