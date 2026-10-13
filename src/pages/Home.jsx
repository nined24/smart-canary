import { APP_VERSION, DEPLOYMENT_STATUS } from '../config';

export default function Home() {
  return (
    <div className="page">
      <h1>Smart Store</h1>
      <p>
        Welcome to Smart Store. Browse our products and add items to your cart.
      </p>
      <div className="info-box">
        <p>
          <strong>Application Version:</strong> {APP_VERSION}
        </p>
        <p>
          <strong>Deployment Status:</strong> {DEPLOYMENT_STATUS}
        </p>
      </div>
    </div>
  );
}
