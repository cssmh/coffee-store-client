const servicesData = [
  {
    id: 1,
    title: "Branding",
    description:
      "Build a unique brand identity that resonates with your audience.",
    image:
      "https://hasthemes.com/blog/wp-content/uploads/2022/04/coffee-website-templates.jpg.webp",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create stunning designs that capture attention and communicate your message.",
    image:
      "https://graphicsfamily.com/wp-content/uploads/edd/2022/09/Coffee-Shop-Instagram-Post-Design-Template-999x999.png",
  },
  {
    id: 3,
    title: "Marketing",
    description:
      "Implement effective marketing strategies to grow your business.",
    image:
      "https://storage.googleapis.com/sales.appinst.io/2021/06/AI_T12CSMIF2021_Banner_1.png",
  },
  {
    id: 4,
    title: "Advertisement",
    description:
      "Leverage advertising to reach your target audience effectively.",
    image:
      "https://img.freepik.com/premium-vector/instant-coffee-ad-with-coffee-splash-elements-brown-background_317810-1356.jpg?w=740",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1230px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="bg-coffee text-white px-4 py-2 rounded hover:bg-coffee-dark transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
