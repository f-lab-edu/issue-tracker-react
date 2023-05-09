type Listener = () => void;

class Observer {
  private listeners: Set<Listener> = new Set();

  public subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.unsubscribe(listener);
  }

  public unsubscribe(listener: Listener) {
    this.listeners.delete(listener);
  }

  public notify() {
    this.listeners.forEach((listener) => listener());
  }
}

export default Observer;
