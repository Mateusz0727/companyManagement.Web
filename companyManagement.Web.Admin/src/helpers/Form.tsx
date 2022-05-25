

class FormHelper<T extends Record<string, any>>
{
    private $initial = {};

    public $loaded: boolean;
    public $loading: boolean;


    [prop: string]: any;

    /**
     * Create a new Form instance.
     */
    public constructor(data: T)
    {
        this.$loaded = false;
        this.$loading = false;
        this.setInitialValues(data);
        this.withData(data);
    }

    public withData(data: T): FormHelper<T>
    {
        for (const field in data)
        {
            this[field as string] = data[field];
        }

        return this;
    }

    public setInitialValues(values: any): void
    {
        this.$initial = {};

  
    }




 

    public static create<T>(data: T): FormHelper<T>
    {
        return new FormHelper<T>(data);
    }
}

type Form<T> = FormHelper<T> & T;

interface FormFactory
{
    new <T>(data: T): Form<T>;
    create<T>(data: T): Form<T>;
}

const Form: FormFactory = FormHelper as any;

export default Form;
