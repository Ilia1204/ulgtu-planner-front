import { useDebounce } from '@/hooks/useDebounce'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import type { ISearchFormData } from '../search.interface'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange',
		defaultValues: {
			searchTerm: ''
		}
	})

	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTerm, 0)

	return useMemo(() => ({ debouncedSearch, searchTerm, control }), [searchTerm])
}
