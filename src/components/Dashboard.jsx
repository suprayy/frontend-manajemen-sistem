const Dashboard = () => {
  return (
    <>
      {/* component */}

      <nav className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center px-9">
          {/* Ícono de Menú */}
          <button id="menu-button" className="lg:hidden">
            <i className="fas fa-bars text-cyan-500 text-lg" />
          </button>
          {/* Logo */}
          <div className="ml-1">
            <img
              src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
              alt="logo"
              className="h-20 w-28"
            />
          </div>
          {/* Ícono de Notificación y Perfil */}
          <div className="space-x-4">
            <button>
              <i className="fas fa-bell text-cyan-500 text-lg" />
            </button>
            {/* Botón de Perfil */}
            <button>
              <i className="fas fa-user text-cyan-500 text-lg" />
            </button>
          </div>
        </div>
      </nav>
      {/* Barra lateral */}
      <div
        id="sidebar"
        className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
      >
        {/* Items */}
        <div className="p-4 space-y-4">
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-gift" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-store" />
            <span>Manajemen Karyawan</span>
          </a>
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-wallet" />
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-sign-out-alt" />
            <span>Keluar</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
