import { useId, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import './FormField.css'

interface CommonProps {
  label: string
  hint?: string
  error?: string
  required?: boolean
}

type InputFieldProps = CommonProps & { as?: 'input' } & Omit<InputHTMLAttributes<HTMLInputElement>, 'required'>
type TextareaFieldProps = CommonProps & { as: 'textarea' } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'required'>
type SelectFieldProps = CommonProps & { as: 'select'; options: { value: string; label: string }[] } & Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'required'
  >

export type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps

/**
 * Labelled form control with hint + inline error, wired up with
 * aria-describedby / aria-invalid for screen readers.
 */
export function FormField(props: FormFieldProps) {
  const { label, hint, error, required, className, id: idProp, ...rest } = props
  const autoId = useId()
  const id = idProp ?? autoId
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  const controlProps = {
    id,
    required,
    className: 'field__control',
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
  }

  let control
  if (rest.as === 'textarea') {
    const { as: _as, ...textareaRest } = rest
    void _as
    control = <textarea rows={5} {...textareaRest} {...controlProps} />
  } else if (rest.as === 'select') {
    const { as: _as, options, ...selectRest } = rest
    void _as
    control = (
      <select {...selectRest} {...controlProps}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    )
  } else {
    const { as: _as, ...inputRest } = rest
    void _as
    control = <input {...inputRest} {...controlProps} />
  }

  return (
    <div className={['field', error && 'field--error', className].filter(Boolean).join(' ')}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? (
          <span className="field__required" aria-hidden="true">
            {' '}*
          </span>
        ) : (
          <span className="field__optional"> (opcional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
      {control}
      {error && (
        <p id={errorId} className="field__error">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="field__error-icon">
            <circle cx="10" cy="10" r="9" fill="currentColor" />
            <path d="M10 5v6M10 14v.5" stroke="var(--color-white)" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
