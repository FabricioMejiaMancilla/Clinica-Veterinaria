const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Crear la ventana del navegador.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "S/N - Sistema Veterinario",
    icon: path.join(__dirname, 'assets/icon.png'), // Opcional: si tienes un icono
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Ocultar la barra de menú por defecto (opcional, para que parezca más app de escritorio)
  win.setMenuBarVisibility(false);

  // Cargar el archivo index.html de la app.
  win.loadFile('index.html');
}

// Este método se llamará cuando Electron haya terminado la inicialización
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // En macOS es común recrear una ventana cuando se hace clic en el icono del dock
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Salir cuando todas las ventanas estén cerradas, excepto en macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
