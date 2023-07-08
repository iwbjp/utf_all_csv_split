const zip = document.getElementById('zip')
const search = document.getElementById('search')
const kana = document.getElementById('kana')
const address = document.getElementById('address')
const error = document.getElementById('error')
const zip3digit = [
  '001',
  '002',
  '003',
  '004',
  '005',
  '006',
  '007',
  '010',
  '011',
  '012',
  '013',
  '014',
  '015',
  '016',
  '017',
  '020',
  '021',
  '022',
  '023',
  '024',
  '025',
  '026',
  '027',
  '028',
  '030',
  '031',
  '033',
  '034',
  '035',
  '036',
  '037',
  '038',
  '040',
  '041',
  '042',
  '043',
  '044',
  '045',
  '046',
  '047',
  '050',
  '051',
  '052',
  '053',
  '054',
  '055',
  '056',
  '057',
  '058',
  '059',
  '060',
  '062',
  '063',
  '064',
  '065',
  '066',
  '067',
  '068',
  '069',
  '070',
  '071',
  '072',
  '073',
  '074',
  '075',
  '076',
  '077',
  '078',
  '079',
  '080',
  '081',
  '082',
  '083',
  '084',
  '085',
  '086',
  '087',
  '090',
  '091',
  '092',
  '093',
  '094',
  '095',
  '096',
  '097',
  '100',
  '101',
  '102',
  '103',
  '104',
  '105',
  '106',
  '107',
  '108',
  '110',
  '111',
  '112',
  '113',
  '114',
  '115',
  '116',
  '120',
  '121',
  '123',
  '124',
  '125',
  '130',
  '131',
  '132',
  '133',
  '134',
  '135',
  '136',
  '140',
  '141',
  '142',
  '143',
  '144',
  '145',
  '146',
  '150',
  '151',
  '152',
  '153',
  '154',
  '155',
  '156',
  '157',
  '158',
  '160',
  '161',
  '162',
  '163',
  '164',
  '165',
  '166',
  '167',
  '168',
  '169',
  '170',
  '171',
  '173',
  '174',
  '175',
  '176',
  '177',
  '178',
  '179',
  '180',
  '181',
  '182',
  '183',
  '184',
  '185',
  '186',
  '187',
  '188',
  '189',
  '190',
  '191',
  '192',
  '193',
  '194',
  '195',
  '196',
  '197',
  '198',
  '201',
  '202',
  '203',
  '204',
  '205',
  '206',
  '207',
  '208',
  '210',
  '211',
  '213',
  '214',
  '215',
  '216',
  '220',
  '221',
  '222',
  '223',
  '224',
  '225',
  '226',
  '227',
  '228',
  '229',
  '230',
  '231',
  '232',
  '233',
  '234',
  '235',
  '236',
  '237',
  '238',
  '239',
  '240',
  '241',
  '242',
  '243',
  '244',
  '245',
  '246',
  '247',
  '248',
  '249',
  '250',
  '251',
  '252',
  '253',
  '254',
  '255',
  '256',
  '257',
  '258',
  '260',
  '261',
  '262',
  '263',
  '264',
  '265',
  '266',
  '267',
  '270',
  '271',
  '272',
  '273',
  '274',
  '275',
  '276',
  '277',
  '278',
  '279',
  '282',
  '283',
  '284',
  '285',
  '286',
  '287',
  '288',
  '290',
  '292',
  '293',
  '294',
  '295',
  '296',
  '297',
  '298',
  '300',
  '301',
  '302',
  '303',
  '304',
  '305',
  '306',
  '307',
  '308',
  '310',
  '312',
  '313',
  '314',
  '315',
  '316',
  '317',
  '318',
  '320',
  '321',
  '322',
  '323',
  '324',
  '325',
  '326',
  '327',
  '328',
  '330',
  '331',
  '332',
  '333',
  '334',
  '335',
  '336',
  '337',
  '338',
  '339',
  '340',
  '341',
  '342',
  '343',
  '344',
  '345',
  '346',
  '347',
  '348',
  '350',
  '351',
  '352',
  '353',
  '354',
  '355',
  '356',
  '357',
  '358',
  '359',
  '360',
  '361',
  '362',
  '363',
  '364',
  '365',
  '366',
  '367',
  '368',
  '370',
  '371',
  '372',
  '373',
  '374',
  '375',
  '376',
  '377',
  '378',
  '380',
  '381',
  '382',
  '383',
  '384',
  '385',
  '386',
  '387',
  '388',
  '390',
  '391',
  '392',
  '393',
  '394',
  '395',
  '396',
  '397',
  '398',
  '399',
  '400',
  '401',
  '402',
  '403',
  '404',
  '405',
  '406',
  '407',
  '408',
  '410',
  '411',
  '412',
  '413',
  '414',
  '415',
  '416',
  '417',
  '418',
  '420',
  '422',
  '424',
  '425',
  '426',
  '427',
  '428',
  '430',
  '432',
  '433',
  '434',
  '435',
  '436',
  '437',
  '438',
  '439',
  '440',
  '441',
  '442',
  '443',
  '444',
  '445',
  '446',
  '447',
  '448',
  '450',
  '451',
  '452',
  '453',
  '454',
  '455',
  '456',
  '457',
  '458',
  '459',
  '460',
  '461',
  '462',
  '463',
  '464',
  '465',
  '466',
  '467',
  '468',
  '471',
  '472',
  '473',
  '474',
  '475',
  '476',
  '477',
  '478',
  '479',
  '481',
  '482',
  '483',
  '484',
  '485',
  '486',
  '487',
  '488',
  '489',
  '491',
  '492',
  '493',
  '494',
  '495',
  '496',
  '497',
  '498',
  '500',
  '502',
  '503',
  '504',
  '505',
  '506',
  '507',
  '508',
  '510',
  '511',
  '512',
  '513',
  '514',
  '515',
  '516',
  '517',
  '518',
  '520',
  '521',
  '522',
  '523',
  '524',
  '525',
  '526',
  '527',
  '528',
  '530',
  '531',
  '532',
  '533',
  '534',
  '535',
  '536',
  '537',
  '538',
  '539',
  '540',
  '541',
  '542',
  '543',
  '544',
  '545',
  '546',
  '547',
  '549',
  '550',
  '551',
  '552',
  '553',
  '554',
  '555',
  '556',
  '557',
  '558',
  '559',
  '560',
  '561',
  '562',
  '563',
  '564',
  '565',
  '566',
  '567',
  '568',
  '569',
  '570',
  '571',
  '572',
  '573',
  '574',
  '575',
  '576',
  '577',
  '578',
  '579',
  '580',
  '581',
  '582',
  '583',
  '584',
  '585',
  '586',
  '587',
  '588',
  '589',
  '590',
  '591',
  '592',
  '593',
  '594',
  '595',
  '596',
  '597',
  '598',
  '599',
  '600',
  '601',
  '602',
  '603',
  '604',
  '605',
  '606',
  '607',
  '610',
  '611',
  '612',
  '613',
  '614',
  '615',
  '616',
  '617',
  '618',
  '620',
  '621',
  '622',
  '623',
  '624',
  '625',
  '626',
  '627',
  '630',
  '631',
  '632',
  '633',
  '634',
  '635',
  '636',
  '637',
  '638',
  '640',
  '641',
  '642',
  '643',
  '644',
  '645',
  '646',
  '647',
  '648',
  '650',
  '651',
  '652',
  '653',
  '654',
  '655',
  '656',
  '657',
  '658',
  '659',
  '660',
  '661',
  '662',
  '663',
  '664',
  '665',
  '666',
  '667',
  '668',
  '670',
  '672',
  '673',
  '674',
  '675',
  '676',
  '677',
  '678',
  '680',
  '681',
  '682',
  '683',
  '684',
  '685',
  '690',
  '691',
  '692',
  '693',
  '694',
  '695',
  '696',
  '697',
  '698',
  '700',
  '702',
  '703',
  '704',
  '705',
  '706',
  '707',
  '708',
  '710',
  '711',
  '712',
  '713',
  '714',
  '715',
  '716',
  '717',
  '718',
  '720',
  '721',
  '722',
  '723',
  '725',
  '726',
  '727',
  '728',
  '730',
  '732',
  '733',
  '734',
  '735',
  '736',
  '737',
  '738',
  '739',
  '740',
  '741',
  '742',
  '743',
  '744',
  '745',
  '746',
  '747',
  '750',
  '751',
  '752',
  '753',
  '754',
  '755',
  '756',
  '757',
  '758',
  '760',
  '761',
  '762',
  '763',
  '764',
  '765',
  '766',
  '767',
  '768',
  '770',
  '772',
  '773',
  '774',
  '775',
  '776',
  '777',
  '778',
  '780',
  '781',
  '782',
  '783',
  '784',
  '785',
  '786',
  '787',
  '788',
  '790',
  '791',
  '792',
  '793',
  '794',
  '795',
  '796',
  '797',
  '798',
  '800',
  '801',
  '802',
  '803',
  '804',
  '805',
  '806',
  '807',
  '808',
  '809',
  '810',
  '812',
  '813',
  '814',
  '815',
  '816',
  '817',
  '818',
  '819',
  '820',
  '821',
  '822',
  '823',
  '824',
  '825',
  '826',
  '827',
  '828',
  '830',
  '831',
  '832',
  '833',
  '834',
  '835',
  '836',
  '837',
  '838',
  '839',
  '840',
  '841',
  '842',
  '843',
  '844',
  '845',
  '846',
  '847',
  '848',
  '849',
  '850',
  '852',
  '853',
  '854',
  '855',
  '856',
  '857',
  '858',
  '860',
  '862',
  '863',
  '864',
  '865',
  '866',
  '867',
  '868',
  '870',
  '871',
  '872',
  '873',
  '874',
  '875',
  '876',
  '877',
  '878',
  '880',
  '881',
  '882',
  '883',
  '884',
  '885',
  '886',
  '887',
  '888',
  '890',
  '892',
  '893',
  '894',
  '895',
  '896',
  '897',
  '898',
  '900',
  '902',
  '903',
  '904',
  '905',
  '906',
  '907',
  '910',
  '911',
  '912',
  '913',
  '914',
  '915',
  '916',
  '917',
  '918',
  '920',
  '921',
  '922',
  '923',
  '924',
  '925',
  '926',
  '927',
  '928',
  '930',
  '931',
  '932',
  '933',
  '934',
  '935',
  '936',
  '937',
  '938',
  '939',
  '940',
  '941',
  '942',
  '943',
  '944',
  '945',
  '946',
  '947',
  '948',
  '950',
  '951',
  '952',
  '953',
  '954',
  '955',
  '956',
  '957',
  '958',
  '960',
  '961',
  '962',
  '963',
  '964',
  '965',
  '966',
  '967',
  '968',
  '970',
  '971',
  '972',
  '973',
  '974',
  '975',
  '976',
  '980',
  '981',
  '982',
  '983',
  '984',
  '985',
  '986',
  '987',
  '988',
  '990',
  '991',
  '992',
  '993',
  '994',
  '995',
  '996',
  '997',
  '998',
]

search.addEventListener('click', () => {
  const postcode = zip.value.replace(/\-/g, '').trim()
  const csvfile = zip3digit.includes(postcode.slice(0, 3))
    ? postcode.slice(0, 3)
    : postcode.slice(0, 5)

  if (!postcode) return
  if (postcode.length !== 7) {
    error.textContent = '郵便番号は7桁です'
    kana.value = ''
    address.value = ''
    return
  } else {
    error.textContent = ''
  }

  function fetchCSV(file) {
    fetch(`./data/${file}.csv`)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Array.from(
          data.split('\n').map((line) => line.split(','))
        )
        const filterData = parsedData
          .filter((item) => item[0] === postcode)
          .flat()
        const kanaData = filterData.slice(1, 4).join('')
        const addressData = filterData.slice(4).join('')

        if (!filterData.length) {
          error.textContent = '存在しない郵便番号です'
          kana.value = ''
          address.value = ''
        } else {
          error.textContent = ''
          kana.value = kanaData
          address.value = addressData
        }
      })
  }
  fetchCSV(csvfile)
})