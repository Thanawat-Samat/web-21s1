import { groupBy, keyBy, mapValues } from 'lodash'

const athletes = [
  { slug: 'shelly-ann-fraser-pryce', name: 'Shell-Ann Fraser-Pryce', teamSlug: 'jamaica', team: 'Jamaica', age: 34, gender: 'Female' },
  { slug: 'sunisa-lee', name: 'Sunisa Lee', teamSlug: 'usa', team: 'USA', age: 18, gender: 'Female' },
  { slug: 'hsing-chun-kuo', name: 'Hsing-Chun Kuo', teamSlug: 'chinese-taipei', team: 'Chinese Taipei', age: 27, gender: 'Female' },
  { slug: 'ahmed-hafnaoui', name: 'Ahmed Hafnaoui', teamSlug: 'tunisia', team: 'Tunisia', age: 18, gender: 'Male' }
]

const entryCompetitors = [
  { heatSlug: 'f100m-sf1', slug: 'elaine-thompson-herah', name: 'Elaine Thompson-Herah', teamSlug: 'jamaica', lane: 4 },
  { heatSlug: 'f100m-sf1', slug: 'ajla-del-ponte', name: 'Ajla del Ponte', teamSlug: 'other', lane: 6 },
  { heatSlug: 'f100m-sf1', slug: 'dina-asher-smith', name: 'Dina Asher-Smith', teamSlug: 'great-britain', lane: 7 },
  { heatSlug: 'f100m-sf1', slug: 'jenna-prandini', name: 'Jenna Prandini', teamSlug: 'usa', lane: 8 },
  { heatSlug: 'f100m-sf1', slug: 'khamica-bingham', name: 'Khamica Bingham', teamSlug: 'other', lane: 2 },
  { heatSlug: 'f100m-sf1', slug: 'tynia-gaither', name: 'Tynia Gaither', teamSlug: 'other', lane: 3 },
  { heatSlug: 'f100m-sf1', slug: 'tatjana-pinto', name: 'Tatjana Pinto', teamSlug: 'germany', lane: 9 },
  { heatSlug: 'f100m-sf1', slug: 'mudhawi-alshammari', name: 'Mudhawi Alshammari', teamSlug: 'other', lane: 3 },
  { heatSlug: 'f100m-sf2', slug: 'marie-josee-ta-lou', name: 'Marie-Josee Ta Lou', teamSlug: 'other', lane: 5 },
  { heatSlug: 'f100m-sf2', slug: 'shericka-jackson', name: 'Shericka Jackson', teamSlug: 'jamaica', lane: 6 },
  { heatSlug: 'f100m-sf2', slug: 'michelle-lee-ahye', name: 'Michelle-Lee Ahye', teamSlug: 'other', lane: 4 },
  { heatSlug: 'f100m-sf2', slug: 'alexandra-burghardt', name: 'Alexandra Burghardt', teamSlug: 'germany', lane: 7 },
  { heatSlug: 'f100m-sf2', slug: 'javianne-oliver', name: 'Javianne Oliver', teamSlug: 'usa', lane: 9 },
  { heatSlug: 'f100m-sf2', slug: 'crystal-emmanuel', name: 'Crystal Emmanuel', teamSlug: 'other', lane: 2 },
  { heatSlug: 'f100m-sf2', slug: 'manqi-ge', name: 'Manqi Ge', teamSlug: 'china', lane: 3 },
  { heatSlug: 'f100m-sf2', slug: 'asha-philip', name: 'Asha Philip', teamSlug: 'great-britain', lane: 8 },
  { heatSlug: 'f100m-sf3', slug: 'shelly-ann-fraser-pryce', name: 'Shelly-Ann Fraser-Pryce', teamSlug: 'jamaica', lane: 5 },
  { heatSlug: 'f100m-sf3', slug: 'mujinga-kambundji', name: 'Mujinga Kambundji', teamSlug: 'other', lane: 7 },
  { heatSlug: 'f100m-sf3', slug: 'teahna-daniels', name: 'Teahna Daniels', teamSlug: 'usa', lane: 6 },
  { heatSlug: 'f100m-sf3', slug: 'daryll-neita', name: 'Daryll Neita', teamSlug: 'great-britain', lane: 4 },
  { heatSlug: 'f100m-sf3', slug: 'nzubechi-grace-nwokocha', name: 'Nzubechi Grace Nwokocha', teamSlug: 'other', lane: 9 },
  { heatSlug: 'f100m-sf3', slug: 'gina-bass', name: 'Gina Bass', teamSlug: 'other', lane: 2 },
  { heatSlug: 'f100m-sf3', slug: 'murielle-ahoure', name: 'Murielle Ahoure', teamSlug: 'other', lane: 8 },
  { heatSlug: 'f100m-sf3', slug: 'anna-bongiorni', name: 'Anna Bongiorni', teamSlug: 'italy', lane: 3 },
  { heatSlug: 'f100m-f', slug: 'elaine-thompson-herah', name: 'Elaine Thompson-Herah', teamSlug: 'jamaica', lane: 4 },
  { heatSlug: 'f100m-f', slug: 'shelly-ann-fraser-pryce', name: 'Shelly-Ann Fraser-Pryce', teamSlug: 'jamaica', lane: 5 },
  { heatSlug: 'f100m-f', slug: 'shericka-jackson', name: 'Shericka Jackson', teamSlug: 'jamaica', lane: 7 },
  { heatSlug: 'f100m-f', slug: 'marie-josee-ta-lou', name: 'Marie-Josee Ta Lou', teamSlug: 'other', lane: 6 },
  { heatSlug: 'f100m-f', slug: 'mujinga-kambundji', name: 'Mujinga Kambundji', teamSlug: 'other', lane: 9 },
  { heatSlug: 'f100m-f', slug: 'teahna-daniels', name: 'Teahna Daniels', teamSlug: 'usa', lane: 3 },
  { heatSlug: 'f100m-f', slug: 'daryll-neita', name: 'Daryll Neita', teamSlug: 'great-britain', lane: 2 }
]

const entryRecords = [
  { slug: 'elaine-thompson-herah', name: 'Elaine Thompson-Herah', pb100: '10.61', pb200: '21.53', sb100: '10.61', sb200: '21.53' },
  { slug: 'shelly-ann-fraser-pryce', name: 'Shelly-Ann Fraser-Pryce', pb100: '10.63', pb200: '21.79', sb100: '10.63', sb200: '21.79' },
  { slug: 'shericka-jackson', name: 'Shericka Jackson', pb100: '10.76', pb200: '21.82', sb100: '10.76', sb200: '21.82' },
  { slug: 'marie-josee-ta-lou', name: 'Marie-Josee Ta Lou', pb100: '10.78', pb200: '22.08', sb100: '10.78', sb200: '22.11' },
  { slug: 'mujinga-kambundji', name: 'Mujinga Kambundji', pb100: '10.95', pb200: '22.26', sb100: '10.95', sb200: '22.26' },
  { slug: 'teahna-daniels', name: 'Teahna Daniels', pb100: '10.84', pb200: '22.51', sb100: '10.84', sb200: '22.54' },
  { slug: 'daryll-neita', name: 'Daryll Neita', pb100: '10.96', pb200: '23.06', sb100: '10.96', sb200: '23.06' }
]

const resultAttempts = [
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.19', result: '-' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.24', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.27', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.30', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.33', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.35', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.37', result: 'o' },
  { athleteSlug: 'mutaz-essa-barshim', distance: '2.39', result: 'xxx' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.19', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.24', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.27', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.30', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.33', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.35', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.37', result: 'o' },
  { athleteSlug: 'gianmarco-tamberi', distance: '2.39', result: 'xxx' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.19', result: 'xo' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.24', result: 'o' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.27', result: 'o' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.30', result: 'o' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.33', result: 'o' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.35', result: 'x-' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.37', result: 'o' },
  { athleteSlug: 'maksim-nedasekau', distance: '2.39', result: 'xxx' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.19', result: 'o' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.24', result: 'o' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.27', result: 'o' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.30', result: 'o' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.33', result: 'xo' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.35', result: 'o' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.37', result: 'x-' },
  { athleteSlug: 'sanghyeok-woo', distance: '2.39', result: 'xx' },
  { athleteSlug: 'brandon-starc', distance: '2.19', result: 'o' },
  { athleteSlug: 'brandon-starc', distance: '2.24', result: 'o' },
  { athleteSlug: 'brandon-starc', distance: '2.27', result: 'o' },
  { athleteSlug: 'brandon-starc', distance: '2.30', result: 'o' },
  { athleteSlug: 'brandon-starc', distance: '2.33', result: 'xxo' },
  { athleteSlug: 'brandon-starc', distance: '2.35', result: 'o' },
  { athleteSlug: 'brandon-starc', distance: '2.37', result: 'x-' },
  { athleteSlug: 'brandon-starc', distance: '2.39', result: 'xx' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.19', result: 'o' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.24', result: 'o' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.27', result: 'o' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.30', result: 'xo' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.33', result: 'xo' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.35', result: 'xx-' },
  { athleteSlug: 'mikhail-akimenko', distance: '2.37', result: 'x' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.19', result: 'o' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.24', result: 'o' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.27', result: 'xxo' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.30', result: 'xo' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.33', result: 'xo' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.35', result: '-' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.37', result: 'x-' },
  { athleteSlug: 'juvaughn-harrison', distance: '2.39', result: 'xx' },
  { athleteSlug: 'django-lovett', distance: '2.19', result: 'o' },
  { athleteSlug: 'django-lovett', distance: '2.24', result: 'o' },
  { athleteSlug: 'django-lovett', distance: '2.27', result: 'o' },
  { athleteSlug: 'django-lovett', distance: '2.30', result: 'o' },
  { athleteSlug: 'django-lovett', distance: '2.33', result: 'xxx' },
  { athleteSlug: 'ilya-ivanyuk', distance: '2.19', result: 'o' },
  { athleteSlug: 'ilya-ivanyuk', distance: '2.24', result: 'o' },
  { athleteSlug: 'ilya-ivanyuk', distance: '2.27', result: 'o' },
  { athleteSlug: 'ilya-ivanyuk', distance: '2.30', result: 'xo' },
  { athleteSlug: 'ilya-ivanyuk', distance: '2.33', result: 'xxx' },
  { athleteSlug: 'hamish-kerr', distance: '2.19', result: 'o' },
  { athleteSlug: 'hamish-kerr', distance: '2.24', result: 'o' },
  { athleteSlug: 'hamish-kerr', distance: '2.27', result: 'xxo' },
  { athleteSlug: 'hamish-kerr', distance: '2.30', result: 'xxo' },
  { athleteSlug: 'hamish-kerr', distance: '2.33', result: 'xxx' },
  { athleteSlug: 'shelby-mcewen', distance: '2.19', result: 'o' },
  { athleteSlug: 'shelby-mcewen', distance: '2.24', result: 'xxo' },
  { athleteSlug: 'shelby-mcewen', distance: '2.27', result: 'o' },
  { athleteSlug: 'shelby-mcewen', distance: '2.30', result: 'xxx' },
  { athleteSlug: 'naoto-tobe', distance: '2.19', result: 'xo' },
  { athleteSlug: 'naoto-tobe', distance: '2.24', result: 'o' },
  { athleteSlug: 'naoto-tobe', distance: '2.27', result: 'xxx' },
  { athleteSlug: 'tom-gale', distance: '2.19', result: 'o' },
  { athleteSlug: 'tom-gale', distance: '2.24', result: 'o' },
  { athleteSlug: 'tom-gale', distance: '2.27', result: 'o' },
  { athleteSlug: 'tom-gale', distance: '2.30', result: 'xxx' }
]

const resultPlacements = [
  { slug: 'mutaz-essa-barshim', name: 'Mutaz Essa Barshim', teamSlug: 'qat', rank: 1, order: 1, distance: '2.37', record: 'SB' },
  { slug: 'gianmarco-tamberi', name: 'Gianmarco Tamberi', teamSlug: 'ita', rank: 1, order: 12, distance: '2.37', record: 'SB' },
  { slug: 'maksim-nedasekau', name: 'Maksim Nedasekau', teamSlug: 'blr', rank: 3, order: 3, distance: '2.37', record: 'NR=' },
  { slug: 'sanghyeok-woo', name: 'Sanghyeok Woo', teamSlug: 'kor', rank: 4, order: 8, distance: '2.35', record: 'NR' },
  { slug: 'brandon-starc', name: 'Brandon Starc', teamSlug: 'aus', rank: 5, order: 9, distance: '2.35', record: 'SB' },
  { slug: 'mikhail-akimenko', name: 'Mikhail Akimenko', teamSlug: 'roc', rank: 6, order: 6, distance: '2.33', record: 'SB=' },
  { slug: 'juvaughn-harrison', name: 'Juvaughn Harrison', teamSlug: 'usa', rank: 7, order: 13, distance: '2.33', record: '-' },
  { slug: 'django-lovett', name: 'Django Lovett', teamSlug: 'can', rank: 8, order: 11, distance: '2.30', record: '-' },
  { slug: 'ilya-ivanyuk', name: 'Ilya Ivanyuk', teamSlug: 'roc', rank: 9, order: 2, distance: '2.30', record: '-' },
  { slug: 'hamish-kerr', name: 'Hamish Kerr', teamSlug: 'nzl', rank: 10, order: 10, distance: '2.30', record: '-' },
  { slug: 'shelby-mcewen', name: 'Shelby Mcewen', teamSlug: 'usa', rank: 12, order: 7, distance: '2.27', record: '-' },
  { slug: 'naoto-tobe', name: 'Naoto Tobe', teamSlug: 'jpn', rank: 13, order: 4, distance: '2.24', record: '-' }
]

const sports = [
  { slug: 'sprinting', name: 'Sprinting', eventCount: 11, description: 'Run as fast as you can! Run as fast as anyone can! Sprinting includes 100m, 200m, 400m, and relays. These events are the flag-bearers of athletics.' },
  { slug: 'gymnastics', name: 'Gymnastics', eventCount: 13, description: 'Gymnastics covers 3 disciplines: Artistic Gymnastics, Rhythmic Gymnastics, and Trampoline. There are 13 distinct events, including individual, team, and all-around.' },
  { slug: 'weight-lifting', name: 'Weight Lifting', eventCount: 14, description: 'There are 2 standard techniques for weight-lifting: the "snatch" and the "clean and jerk". Competitors are grouped by bodyweight. Each competitor has 3 attempts at each technique, keeping their best effort.' },
  { slug: 'swimming', name: 'Swimming', eventCount: 35, description: 'Running, but mostly with your hands, and in the water. You probably already knew what swimming was... this sport spans sprinting up to marathon, and also team events.' }
]

const teams = [
  { slug: 'usa', rank: 1, name: 'United States of America', countFirst: 39, countSecond: 41, countThird: 33, countTotal: 113, introduction: 'They get a lot of medals. Michael Phelps is really good at swimming. Katie Ledecky too! Carl Lewis was a pretty great runner.' },
  { slug: 'china', rank: 2, name: 'People\'s Republic of China', countFirst: 38, countSecond: 32, countThird: 18, countTotal: 88, introduction: 'Great at table-tennis and badminton. Zou Kai is a legendary gymnast. Wu Minxia and Chen Ruolin are great divers.' },
  { slug: 'japan', rank: 3, name: 'Japan', countFirst: 27, countSecond: 14, countThird: 17, countTotal: 58, introduction: 'Judo-KIIICK! Tadahiro Nomura leads Japan\'s judo dominance.' },
  { slug: 'great-britain', rank: 4, name: 'Great Britain', countFirst: 22, countSecond: 21, countThird: 22, countTotal: 65, introduction: 'Great Britain has won at least one gold medal at every Olympic Games ever! Chris Hoy, Jason Kenny, Bradley Wiggins, Laura (Trott) Kenny are great cyclists.' },
  { slug: 'roc', rank: 5, name: 'ROC', countFirst: 20, countSecond: 28, countThird: 23, countTotal: 71, introduction: 'Competing as ROC, Russian athletes are exceptional at artistic swimming and gymnastics. Go watch Svetlana Romashina in the pool!' },
  { slug: 'australia', rank: 6, name: 'Australia', countFirst: 17, countSecond: 7, countThird: 22, countTotal: 46, introduction: 'Australia are strong swimmers. Ian Thorpe won 5 gold medals.' },
  { slug: 'netherlands', rank: 7, name: 'Netherlands', countFirst: 10, countSecond: 12, countThird: 14, countTotal: 36, introduction: 'The Dutch are strongest at cycling, sprinting, and dressage. Anna van der Breggen was braggin\' about her road race win!' },
  { slug: 'france', rank: 8, name: 'France', countFirst: 10, countSecond: 12, countThird: 11, countTotal: 33, introduction: 'LUNGE! French athletes are great at fencing. They\'re also pretty great at cycling.' },
  { slug: 'germany', rank: 9, name: 'Germany', countFirst: 10, countSecond: 11, countThird: 16, countTotal: 37, introduction: 'Isabell Werth bagged 10 medals in dressage. They\'re also good at football and hockey. Maybe watch out for their cyclists too!' },
  { slug: 'italy', rank: 10, name: 'Italy', countFirst: 10, countSecond: 10, countThird: 20, countTotal: 40, introduction: 'Italy love fencing. Valentina Vezzali scored 6 gold, 1 silver, and 2 bronze medals.' }
]

const entryTeamsBySlug = keyBy(teams, 'slug')
const entryRecordsBySlug = keyBy(entryRecords, 'slug')
const entries = entryCompetitors
  .filter(c => c.heatSlug === 'f100m-f')
  .map(({ slug, teamSlug, lane }) => ({ teamSlug, lane, ...entryRecordsBySlug[slug], team: entryTeamsBySlug[teamSlug]?.name ?? 'Other' }))

const resultAttemptListBySlug = groupBy(resultAttempts, 'athleteSlug')
const resultAttemptsBySlug = mapValues(resultAttemptListBySlug, ats => ats.map(a => `${a.distance}: ${a.result}`).join(' · '))
const results = resultPlacements
  .map(p => ({ ...p, attempts: resultAttemptsBySlug[p.slug] }))

export const fakeData = {
  athletes,
  entries,
  results,
  sports,
  teams
}
