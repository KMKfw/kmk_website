import React from 'react';

enum Status {
  complete,
  underDevelopment,
  planned
}

export default function FeatureTable(): JSX.Element {
  const featureList = [
    // individual feature status can be 'complete', 'underDevelopment', or 'planned', sorry i don't know how to use ENUMS
    {
      category: 'Keyboard Connectivity',
      individualFeatures: [
        {
          name: 'USB Connectivity',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'BLE Connectivity',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: true,
        },
        {
          name: 'Split BLE Connectivity',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: true,
        }
      ]
    },
    {
      category: 'Keyboard Features',
      individualFeatures: [
        {
          name: 'Keymaps and Layers',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'Tap-Dance',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'Combos',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'Macros',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'One Shot Keys',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: true,
        },
        {
          name: 'Mouse Keys',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: false,
        },
        {
          name: 'Encoders full support',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: false,
        },
        {
          name: 'Oled Display',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: false,
        },
        {
          name: 'RGB Matrix',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: false,
        }
      ]
    },
    {
      category: 'Off The Wall Features',
      individualFeatures: [
        {
          name: 'CapsWord',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: false,
        },
        {
          name: 'Ctrl GUI Swap',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: false,
        },
        {
          name: 'ADNS9800 optical sensor',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: false,
        },
        {
          name: 'Pimoroni Trackball',
          status: Status.complete,
          kmk: true,
          qmk: true,
          zmk: false,
        },
        {
          name: 'Run Any Code With Keypress',
          status: Status.complete,
          kmk: true,
          qmk: false,
          zmk: false,
        },

      ]
    },
  ]
  const checkMarkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  const lightBulbIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
  const terminalIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
  const xIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
  const returnIcon = (feature, col: string) => {
    const returnKmkIcon = (stat) => {
      switch (stat) {
        case Status.complete:
          return checkMarkIcon
        case Status.underDevelopment:
          return terminalIcon
        case Status.planned:
          return lightBulbIcon
      }
    }
    switch (col) {
      case 'kmk':
        return returnKmkIcon(feature.status)
      case 'qmk':
        if (feature.qmk) {
          return checkMarkIcon
        } else {
          return xIcon
        }
      case 'zmk':
        if (feature.zmk) {
          return checkMarkIcon
        } else {
          return xIcon
        }
      default: return
    }

  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center align-center mb-3">
        <div className='flex text-[1.25rem] font-sans mr-[1rem]'>Legend</div>
        <div className='flex mr-[1rem]'>{checkMarkIcon}<span className='ml-1'>Supported</span></div>
        <div className='flex mr-[1rem]'>{terminalIcon}<span className='ml-1'>Under Development</span></div>
        <div className='flex mr-[1rem]'>{lightBulbIcon}<span className='ml-1'>Future Feature</span></div>
      </div>
      <table
        className="table table-compact w-full">
        <thead>
          <tr className='border-none'>
            <th className='text-left'>Feature</th>
            <th className='w-[5rem] text-center'>KMK</th>
            <th className='w-[5rem] text-center'>QMK</th>
            <th className='w-[5rem] text-center'>ZMK</th>
          </tr>
        </thead>
        <tbody>
          {featureList.map((feature, key) =>
            <>
              <tr className='active' key={key}>
                <td className='text-left'>{feature.category}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {feature.individualFeatures.map((individualFeature, key) =>
                <tr className='' key={key}>
                  <td className='text-left font-light collapse break-words'>{individualFeature.name}</td>
                  <td className='w-[5rem] text-center'>{returnIcon(individualFeature, 'kmk')}</td>
                  <td className='w-[5rem] text-center'>{returnIcon(individualFeature, 'qmk')}</td>
                  <td className='w-[5rem] text-center'>{returnIcon(individualFeature, 'zmk')}</td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
    </div>

  );
}

