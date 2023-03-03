const dropdownBuilder = (links) => {
  const { basePlugin, otherPlugins } = links.reduce((acc, { route, location, label }) => {
    if (location.includes('core')) {
      acc.basePlugin = {
        to: route,
        label,
      }
    } else {
      acc.otherPlugins.push({
        to: route,
        label,
      })
    }

    return acc
  }, { basePlugin: null, otherPlugins: [] })

  const basePackageLink = {
    label: '@codeceptjs-bootstraps/core',
    to: basePlugin.to,
  }

  const pluginsDropdown = {
    type: 'dropdown',
    label: 'Bootstraps',
    items: otherPlugins.sort((a, b) => a.label.length - b.label.length),
  }

  return [
    basePackageLink,
    pluginsDropdown,
  ]
}

exports.dropdownBuilder = dropdownBuilder
