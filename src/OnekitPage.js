/* eslint-disable no-console */
/* eslint-disable camelcase */
export default function OnekitPage(tt_object) {
  const my_object = {
    events: {
      onKeyboardHeight(e) {
        for (const onKeyboardHeight of getApp().onekit_onKeyboardHeight) {
          onKeyboardHeight(e)
        }
      }
    },
    onLoad(query) {
      if (!getApp().onekit_onKeyboardHeight) {
        getApp().onekit_onKeyboardHeight = []
      }
      if (tt_object.onLoad) {
        tt_object.onLoad.call(this, query)
      }
    },
    animate() {
    },
    selectComponent(selector) {
    // selector = selector.replace(".","$");
    // selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return this[key]
        }
      }
      return null
    },
    selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
    //   selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return [this[key]]
        }
      }
      return []
    }
  }
  if (tt_object.behaviors) {
    for (const behavior of tt_object.behaviors) {
      for (const behavior_key of Object.keys(behavior)) {
        const behavior_value = behavior[behavior_key]
        switch (behavior_key) {
          case 'methods':
            for (const method_key of Object.keys(behavior_value)) {
              const method = behavior_value[method_key]
              my_object[method_key] = method
            }
            break
          default:
            my_object[behavior_key] = behavior_value
            break
        }
      }
    }
  }
  for (const key of Object.keys(tt_object)) {
    const value = tt_object[key]
    switch (key) {
      case 'behaviors':
        break
      case 'onLoad':
        break
      default:
        my_object[key] = value
        break
    }
  }
  return Page(my_object)
}