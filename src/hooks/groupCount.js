import _ from 'lodash'
export function groupCount(groupName, pops) {
  const data = _.groupBy(pops, ['group', groupName])
  return data.true ? data.true.length : 0
}
