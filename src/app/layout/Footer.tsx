const Footer = () => {
  return (
    <footer className="py-10 text-center border-t text-text-secondary">
      <div className="container-custom">
        <div className="flex justify-center items-center gap-12 flex-wrap mb-4">
          <a href="https://openweathermap.org/" target="_blank" className="footer-link">Weather API</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="https://www.linkedin.com/in/nazmul-hossin/" target="_blank" className="footer-link">Contact Support</a>
          <a href="https://weatherpro-react.vercel.app/" target="_blank" className="footer-link">Weather App 1.0</a>
          <a href="https://github.com/nazmulhossin/weather-forecast-app" target="_blank" className="footer-link">About Abohawa</a>
        </div>

        <div className=" text-[0.9rem] mt-4 pt-4 border-t">
          &copy;{new Date().getFullYear()} Abohawa. All rights reserved. Developed by <a href="https://github.com/nazmulhossin" target="_blank" className="text-primary transition duration-200 hover:text-secondary">Md Nazmul Hossain</a>.
        </div>
      </div>
    </footer>
  )
}

export default Footer