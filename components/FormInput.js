import React, { useState } from 'react'
import { FormControl, IconButton, Input } from 'native-base'
import Icon from './Icon'

const FormInput = ({ label, type, ...props }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type == 'password')
  return (
    <FormControl>
      {label && <FormControl.Label
        _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}
      >
        {label}
      </FormControl.Label>}
      <Input
        px={0}
        py={2}
        borderBottomColor='muted.300'
        variant='outline'
        borderWidth={0}
        borderBottomWidth={1}
        borderRadius={0}
        _focus={{ borderBottomColor: 'muted.800' }}
        type={type}
        {...props}
        secureTextEntry={secureTextEntry}
        InputRightElement={type == 'password' &&
          <IconButton
            borderRadius={0}
            onPress={() => setSecureTextEntry(v => !v)}
            variant='ghost'
            icon={<Icon name={secureTextEntry ? 'eye-outline' : 'eye'} />}
          />
        }
      />
    </FormControl>
  )
}

export default FormInput
