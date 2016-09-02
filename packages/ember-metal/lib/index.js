/**
@module ember
@submodule ember-metal
*/

export { default } from './core'; // reexports
export {
  default as computed,
  cacheFor,
  ComputedProperty
} from './computed';
export { default as alias } from './alias';
export { deprecate } from './debug';
export { default as assign } from './assign';
export { default as merge } from './merge';
export {
  assert,
  warn,
  debug,
  deprecate,
  deprecateFunc,
  runInDebug
} from './debug';
export {
  instrument,
  reset as instrumentationReset,
  subscribe as instrumentationSubscribe,
  unsubscribe as instrumentationUnsubscribe
} from './instrumentation';
export {
  GUID_KEY,
  apply,
  applyStr,
  canInvoke,
  generateGuid,
  guidFor,
  inspect,
  makeArray,
  deprecatedTryCatchFinally,
  tryInvoke,
  uuid,
  wrap
} from './utils';
export {
  isTesting,
  setTesting
} from './testing';
export {
  getOnerror,
  setOnerror
} from './error_handler';
export {
  META_DESC,
  meta
} from './meta';
export { default as Error } from './error';
export { default as Cache } from './cache';
export { default as isFeatureEnabled, FEATURES } from './features';
export {
  _getPath,
  get,
  getWithDefault
} from './property_get';
export {
  set,
  trySet
} from './property_set';
export { default as WeakMap } from './weak_map';
export {
  accumulateListeners,
  addListener,
  hasListeners,
  listenersFor,
  on,
  removeListener,
  sendEvent,
  suspendListener,
  suspendListeners,
  watchedEvents
} from './events';

export { default as isNone } from './is_none';
export { default as isEmpty } from './is_empty';
export { default as isBlank } from './is_blank';
export { default as isPresent } from './is_present';
export { default as run } from './run_loop';
export { default as ObserverSet } from './observer_set';
export {
  beginPropertyChanges,
  changeProperties,
  endPropertyChanges,
  overrideChains,
  propertyDidChange,
  propertyWillChange
} from './property_events';
export {
  defineProperty
} from './properties';
export {
  watchKey,
  unwatchKey
} from './watch_key';
export {
  ChainNode,
  finishChains,
  removeChainWatcher
} from './chains';
export {
  watchPath,
  unwatchPath
} from './watch_path';
export {
  destroy,
  isWatching,
  rewatch,
  unwatch,
  watch
} from './watching';
export { default as libraries } from './libraries';
export {
  Map,
  MapWithDefault,
  OrderedSet
} from './map';
export { default as getProperties } from './get_properties';
export { default as setProperties } from './set_properties';
export { default as expandProperties } from './expand_properties';

export {
  _suspendObserver,
  _suspendObservers,
  addObserver,
  observersFor,
  removeObserver
} from './observer';
export {
  NAME_KEY,
  Mixin,
  aliasMethod,
  _immediateObserver,
  mixin,
  observer,
  required
} from './mixin';
export {
  Binding,
  bind
} from './binding';
export {
  isGlobalPath
} from './path_cache';


// TODO: this needs to be deleted once we refactor the build tooling
// do this for side-effects of updating Ember.assert, warn, etc when
// ember-debug is present
// This needs to be called before any deprecateFunc
import require, { has } from 'require';
if (has('ember-debug')) {
  require('ember-debug');
}
