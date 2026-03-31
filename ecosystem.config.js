module.exports = {
  apps : [
    {
      name: "config-server",
      script: "java",
      args: "-jar Booking_config-server/target/config-server-0.0.1-SNAPSHOT.jar",
      log_file:"./log/config-server.log"
    },

    {
      name: "eureka-server",
      script: "java",
      args: "-jar Booking_eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar",
      log_file:"./log/eureka-server.log"
    },

    {
      name: "api-gateway",
      script: "java",
      args: "-jar booking_api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
      log_file:"./log/api-gateway.log"
    }
  ]
}