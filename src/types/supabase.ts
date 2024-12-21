export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      address: {
        Row: {
          addr1: string
          addr2: string | null
          city: string
          country_id: number
          created_at: string
          id: number
          postal_code: string
          region: string
          updated_at: string
        }
        Insert: {
          addr1: string
          addr2?: string | null
          city: string
          country_id: number
          created_at?: string
          id?: number
          postal_code: string
          region: string
          updated_at?: string
        }
        Update: {
          addr1?: string
          addr2?: string | null
          city?: string
          country_id?: number
          created_at?: string
          id?: number
          postal_code?: string
          region?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "address_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
        ]
      }
      country: {
        Row: {
          country_name: string
          created_at: string
          id: number
          updated_at: string
        }
        Insert: {
          country_name: string
          created_at?: string
          id?: number
          updated_at?: string
        }
        Update: {
          country_name?: string
          created_at?: string
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      order_line: {
        Row: {
          created_at: string
          id: number
          order_id: number
          price: number
          product_item_id: number
          qty: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          order_id: number
          price: number
          product_item_id: number
          qty: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: number
          price?: number
          product_item_id?: number
          qty?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_line_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "shop_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_line_product_item_id_fkey"
            columns: ["product_item_id"]
            isOneToOne: false
            referencedRelation: "product_item"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status: {
        Row: {
          created_at: string
          id: number
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      payment_type: {
        Row: {
          created_at: string
          id: number
          updated_at: string
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string
          value?: string | null
        }
        Relationships: []
      }
      product: {
        Row: {
          category_id: number | null
          created_at: string
          description: string
          id: number
          name: string
          product_image: string
          updated_at: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          description: string
          id?: number
          name: string
          product_image: string
          updated_at?: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          description?: string
          id?: number
          name?: string
          product_image?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["id"]
          },
        ]
      }
      product_category: {
        Row: {
          category_name: string
          created_at: string
          id: number
          parent_category_id: number | null
          updated_at: string
        }
        Insert: {
          category_name: string
          created_at?: string
          id?: number
          parent_category_id?: number | null
          updated_at?: string
        }
        Update: {
          category_name?: string
          created_at?: string
          id?: number
          parent_category_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_category_parent_category_id_fkey"
            columns: ["parent_category_id"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["id"]
          },
        ]
      }
      product_configuration: {
        Row: {
          created_at: string
          id: number
          product_item_id: number
          updated_at: string
          variation_option_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          product_item_id: number
          updated_at?: string
          variation_option_id: number
        }
        Update: {
          created_at?: string
          id?: number
          product_item_id?: number
          updated_at?: string
          variation_option_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_configuration_product_item_id_fkey"
            columns: ["product_item_id"]
            isOneToOne: false
            referencedRelation: "product_item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_configuration_variation_option_id_fkey"
            columns: ["variation_option_id"]
            isOneToOne: false
            referencedRelation: "variation_option"
            referencedColumns: ["id"]
          },
        ]
      }
      product_item: {
        Row: {
          created_at: string
          id: number
          price: number
          product_id: number
          product_image: string
          qty_in_stock: number
          SKU: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          price: number
          product_id: number
          product_image: string
          qty_in_stock: number
          SKU: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          price?: number
          product_id?: number
          product_image?: string
          qty_in_stock?: number
          SKU?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_item_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_item_product_id_fkey1"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion: {
        Row: {
          created_at: string
          description: string | null
          discount_rate: number | null
          end_date: string | null
          id: number
          name: string
          start_date: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount_rate?: number | null
          end_date?: string | null
          id?: number
          name: string
          start_date?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          discount_rate?: number | null
          end_date?: string | null
          id?: number
          name?: string
          start_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      promotion_category: {
        Row: {
          category_id: number
          created_at: string
          id: number
          promotion_id: number
          updated_at: string
        }
        Insert: {
          category_id: number
          created_at?: string
          id?: number
          promotion_id: number
          updated_at?: string
        }
        Update: {
          category_id?: number
          created_at?: string
          id?: number
          promotion_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotion_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_category_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotion"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_method: {
        Row: {
          created_at: string
          id: number
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      shop_order: {
        Row: {
          created_at: string
          id: number
          order_status: number
          order_total: number
          payment_method_id: number
          shipping_address: number
          shipping_method: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          order_status: number
          order_total: number
          payment_method_id: number
          shipping_address: number
          shipping_method: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          order_status?: number
          order_total?: number
          payment_method_id?: number
          shipping_address?: number
          shipping_method?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_order_order_status_fkey"
            columns: ["order_status"]
            isOneToOne: false
            referencedRelation: "order_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_order_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "user_payment_method"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_order_payment_method_id_fkey1"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "user_payment_method"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_order_shipping_address_fkey"
            columns: ["shipping_address"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_order_shipping_address_fkey1"
            columns: ["shipping_address"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_order_shipping_method_fkey"
            columns: ["shipping_method"]
            isOneToOne: false
            referencedRelation: "shipping_method"
            referencedColumns: ["id"]
          },
        ]
      }
      shopping_cart: {
        Row: {
          created_at: string
          id: number
          updated_At: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          updated_At?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          updated_At?: string
          user_id?: string
        }
        Relationships: []
      }
      shopping_cart_item: {
        Row: {
          cart_id: number
          created_at: string
          id: number
          product_item_id: number
          qty: number
          updated_at: string
        }
        Insert: {
          cart_id: number
          created_at?: string
          id?: number
          product_item_id: number
          qty: number
          updated_at?: string
        }
        Update: {
          cart_id?: number
          created_at?: string
          id?: number
          product_item_id?: number
          qty?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shopping_cart_item_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "shopping_cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopping_cart_item_product_item_id_fkey"
            columns: ["product_item_id"]
            isOneToOne: false
            referencedRelation: "product_item"
            referencedColumns: ["id"]
          },
        ]
      }
      user_address: {
        Row: {
          address_id: number | null
          created_at: string
          id: number
          is_default: boolean
          user_id: string
        }
        Insert: {
          address_id?: number | null
          created_at?: string
          id?: number
          is_default?: boolean
          user_id: string
        }
        Update: {
          address_id?: number | null
          created_at?: string
          id?: number
          is_default?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_address_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
        ]
      }
      user_payment_method: {
        Row: {
          account_number: string
          created_at: string
          expiry_date: string
          id: number
          is_default: boolean
          payment_type_id: number
          provider: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_number: string
          created_at?: string
          expiry_date: string
          id?: number
          is_default?: boolean
          payment_type_id: number
          provider: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_number?: string
          created_at?: string
          expiry_date?: string
          id?: number
          is_default?: boolean
          payment_type_id?: number
          provider?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_payment_method_payment_type_id_fkey"
            columns: ["payment_type_id"]
            isOneToOne: false
            referencedRelation: "payment_type"
            referencedColumns: ["id"]
          },
        ]
      }
      user_review: {
        Row: {
          comment: string
          created_at: string
          id: number
          ordered_product_id: number
          rating_value: number
          user_id: string
        }
        Insert: {
          comment: string
          created_at?: string
          id?: number
          ordered_product_id: number
          rating_value: number
          user_id: string
        }
        Update: {
          comment?: string
          created_at?: string
          id?: number
          ordered_product_id?: number
          rating_value?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_review_ordered_product_id_fkey"
            columns: ["ordered_product_id"]
            isOneToOne: false
            referencedRelation: "order_line"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_review_ordered_product_id_fkey1"
            columns: ["ordered_product_id"]
            isOneToOne: false
            referencedRelation: "order_line"
            referencedColumns: ["id"]
          },
        ]
      }
      variation: {
        Row: {
          category_id: number
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          category_id: number
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          category_id?: number
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "variation_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["id"]
          },
        ]
      }
      variation_option: {
        Row: {
          created_at: string
          id: number
          updated_at: string
          value: string | null
          variation_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string
          value?: string | null
          variation_id: number
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string
          value?: string | null
          variation_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "variation_option_variation_id_fkey"
            columns: ["variation_id"]
            isOneToOne: false
            referencedRelation: "variation"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
