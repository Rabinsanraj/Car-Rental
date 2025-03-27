const Map = () => {
  return (
    <>
      <div className="container-fluid pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005405.0486339183!2d77.2090067!3d8.9591401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042f9d84e59df1%3A0x2879cb845b0650!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710920494819!5m2!1sen!2sin"
          className="w-100"
          style={{ height: "400px", border: "0" }}
          loading="lazy" allow="geolocation"
        ></iframe>
      </div>
    </>
  );
};
export default Map;
