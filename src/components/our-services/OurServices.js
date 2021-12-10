import styles from "./ourServices.module.css";
import Service from "../service/Service";
import service from "./Data";
function OurServices() {
  return (
    <div className={styles.services}>
      <h1>Nos Services</h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {service.map((service) => (
            <Service
              icon={service.icon}
              title={service.title}
              description={service.description}
            ></Service>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OurServices;
