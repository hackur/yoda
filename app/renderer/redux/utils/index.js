export function uuid():string {
  const _s4 = () => Math.floor((1+Math.random())*0x10000).toString(16).substr(1)
  return `${_s4()+_s4()}-${_s4()}-${_s4()}-${_s4()+_s4()+_s4()}`
}

export function ucfirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getSpringConfig(stiffness, damping) {
  return {
    stiffness: stiffness,
    damping: damping
  }
}
