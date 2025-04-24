
declare let window: Window & {
  ipc_bridge: {
    load_file: (file: File) => void
  }
};
